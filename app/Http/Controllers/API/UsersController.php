<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use App\Http\Resources\User as UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        //
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

        $unverify = $request->get('unverify', false);

        if ($unverify) {
            $data['unverify'] = $unverify;
            $user->email_verified_at = null;
            if ($user->save()) {
                $data['data'] = new UserResource($user);
            } else {
                $data['error'] = 'Error unregister user';
            }
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
