<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use App\Http\Resources\User as UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class UsersController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = User::query();
        $search = $request->get('search', '');
        if ($search !== '') {
            $search = mb_strtolower($search);
            $query
                ->where(DB::raw('LOWER(name)'), 'LIKE', "%{$search}%")
                ->orWhere(DB::raw('LOWER(email)'), 'LIKE', "%{$search}%")
                ->orWhere(DB::raw('LOWER(phone)'), 'LIKE', "%{$search}%");
        }
        $query->orderBy('email', 'ASC');
        return UserResource::collection($query->paginate(5));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rs = [
            'data' => null,
            'error' => null
        ];
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'regex:/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/', 'confirmed'],
            'phone' => ['nullable', 'string', 'max:255'],
            'accept_terms' => ['required']
        ]);

        $data['password'] = Hash::make($data['password']);
        $data['terms_accepted_at'] = ($data['accept_terms'] ? now() : null);
        unset($data['accept_terms']);

        $User = new User($data);

        if ($User->save()) {
            $rs['data'] = new UserResource($User);
            // Emit registration event to send email verification
            event(new \Illuminate\Auth\Events\Registered($User));
        } else {
            $rs['error'] = 'Error saving user';
        }

        return $rs;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return [
            'data' => new UserResource($user),
            'error' => null
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $data = [
            'data' => new UserResource($user),
            'error' => null
        ];

        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', Rule::unique('users')->ignore($user->id), 'max:255'],
            'password' => ['required', 'string', 'min:8', 'regex:/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/', 'confirmed'],
            'phone' => ['nullable', 'string', 'max:255'],
            'accept_terms' => ['required']
        ]);

        if ($data['email'] !== $user->email) {
            $data['email_verified_at'] = null;
        } else {
            // No need to update email field
            unset($data['email']);
        }

        $data['password'] = Hash::make($data['password']);
        $data['terms_accepted_at'] = ($data['accept_terms'] ? now() : null);

        unset($data['accept_terms']);
        if ($user->update($data)) {
            if (!$user->email_verified_at) {
                // Emit registration event to send email verification
                event(new \Illuminate\Auth\Events\Registered($user));
            }
            $data['data'] = $user;
        }


        return $data;
    }

    /**
     * Email verification cancellation.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function acceptTerms(User $user)
    {
        $jsonData = [
            'data' => null,
            'error' => null
        ];

        $user->terms_accepted_at = now();
        if ($user->save()) {
            $jsonData['data'] = "accepted";
        } else {
            $jsonData['error'] = 'Error saving user';
        }

        return response()->json($jsonData);
    }

    /**
     * Email verification cancellation.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function unverify(Request $request, User $user)
    {
        $data = [
            'data' => new UserResource($user),
            'error' => null
        ];

        $user->email_verified_at = null;

        if ($user->save()) {
            $data['data'] = new UserResource($user);
        } else {
            $data['error'] = 'Error unregister user';
        }

        return $data;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $data = [
            'data' => new UserResource($user),
            'error' => null
        ];
        if (!$user->delete()) {
            $data['error'] = 'Error deleting user';
        }
        return response()->json($data);
    }
}
