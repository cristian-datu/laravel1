<?php

namespace App\Http\Controllers\API;

use App\TermOfService;
use App\Http\Resources\TermsOfService as TermsOfServiceResource;
use App\Events\TermsOfServicePublished;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TermsOfServiceController extends Controller
{

    /**
     * Protect route with Sanctum middleware
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Validate request data
     *
     * @param Request $request
     *
     * @return array
     */
    public function validateRequest(Request $request)
    {
        $input = $request->validate([
            'title' => ['required', 'string', 'min:1', 'max:255'],
            'content' => ['string', 'max:4095'],
            'published_at' => ['nullable', 'string']
        ]);

        $allowedTags = '<' . implode('><', [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'p', 'span', 'strong', 'em', 'blockquote', 'q', 'a', 'b', 'i',
            'small', 'sub', 'sup',
            'dl', 'dt', 'dd',
            'ol', 'ul', 'li',
            'table', 'thead', 'tbody', 'tfoot', 'caption', 'col', 'colgroup', 'tr', 'th', 'td'
        ]) . '>';

        $input['title'] = strip_tags($input['title']);
        $input['content'] = strip_tags($input['content'], $allowedTags);

        return $input;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = TermOfService::query();
        $search = $request->get('search', '');

        if ($search && $search !== '') {
            $search = mb_strtolower($search);
            $query
                ->where(DB::raw('LOWER(title)'), 'LIKE', "%{$search}%");
        }
        $query->orderBy('updated_at', 'DESC');

        return TermsOfServiceResource::collection($query->paginate(5));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $json = [
            'data' => null,
            'error' => null
        ];

        $data = $this->validateRequest($request);

        $termOfService = new TermOfService($data);

        if ($termOfService->save()) {
            $json['data'] = new TermsOfServiceResource($termOfService);

            // Dispatch publish event
            if ($termOfService->published_at) {
                TermsOfServicePublished::dispatch($termOfService);
            }
        } else {
            $json['error'] = 'Error updating Terms of Service';
        }

        return response()->json($json);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\TermOfService  $termOfService
     * @return \Illuminate\Http\Response
     */
    public function show(TermOfService $termOfService)
    {
        return response()->json([
            'data' => $termOfService,
            'error' => null
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TermOfService  $termOfService
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TermOfService $termOfService)
    {
        $json = [
            'data' => new TermsOfServiceResource($termOfService),
            'error' => null
        ];

        if ($termOfService->published_at) {
            $json['error'] = 'Published items cannot be edited';
        } else {
            $data = $this->validateRequest($request);
            if ($termOfService->update($data)) {
                $json['data'] = new TermsOfServiceResource($termOfService);

                // Dispatch publish event
                if ($termOfService->published_at) {
                    TermsOfServicePublished::dispatch($termOfService);
                }
            } else {
                $json['error'] = 'Error updating Terms of Service';
            }
        }

        return response()->json($json);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TermOfService  $termOfService
     * @return \Illuminate\Http\Response
     */
    public function destroy(TermOfService $termOfService)
    {
        $data = [
            'data' => new TermsOfServiceResource($termOfService),
            'error' => null
        ];
        if ($termOfService->published_at !== null) {
            $data['error'] = 'Published Terms of Service cannot be deleted';
        } else {
            if (!$termOfService->delete()) {
                $data['error'] = 'Error deleting Terms of Service';
            }
        }
        return response()->json($data);
    }

    /**
     * Publish Terms of Service.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TermOfService  $termOfService
     * @return \Illuminate\Http\Response
     */
    public function publish(Request $request, TermOfService $termOfService)
    {
        $data = [
            'data' => new TermsOfServiceResource($termOfService),
            'error' => null
        ];

        if ($termOfService->published_at === null) {
            // Set publication date
            $termOfService->published_at = now();

            if ($termOfService->save()) {
                $data['data'] = new TermsOfServiceResource($termOfService);

                // Dispatch publish event
                if ($termOfService->published_at) {
                    TermsOfServicePublished::dispatch($termOfService);
                }
            } else {
                $data['error'] = 'Error publishing Terms of Service';
            }
        } else {
            $data['error'] = 'Terms of Service already published';
        }

        return response()->json($data);
    }

    /**
     * Unpublish Terms of Service.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TermOfService  $termOfService
     * @return \Illuminate\Http\Response
     */
    public function unpublish(Request $request, TermOfService $termOfService)
    {
        $data = [
            'data' => new TermsOfServiceResource($termOfService),
            'error' => null
        ];

        if ($termOfService->published_at !== null) {
            // Unset publication date
            $termOfService->published_at = null;

            if ($termOfService->save()) {
                $data['data'] = new TermsOfServiceResource($termOfService);
            } else {
                $data['error'] = 'Error un-publishing Terms of Service';
            }
        } else {
            $data['error'] = 'Terms of Service already unpublished';
        }

        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function latestPublished()
    {
        $termOfService = TermOfService::whereNotNull('published_at')
            ->orderBy('published_at', 'DESC')
            ->limit(1)
            ->first();

        return response()->json([
            'data' => new TermsOfServiceResource($termOfService),
            'error' => null
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function accepted()
    {
        $jsonData = [
            'data' => null,
            'error' => null
        ];
        $date = auth()->user()->terms_accepted_at;
        if ($date) {
            $acceptedTerms = TermOfService::whereNotNull('published_at')
                ->where('published_at', '<=', $date)
                ->orderBy('published_at', 'DESC')
                ->limit(1)
                ->first();
            if ($acceptedTerms->count() > 0) {
                $jsonData['data'] = new TermsOfServiceResource($acceptedTerms);
            } else {
                $jsonData['error'] = 'Accepted Terms of Service not found';
            }
        }
        return response()->json($jsonData);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function unaccepted()
    {
        $user = auth()->user();
        $jsonData = [
            'data' => "no",
            'userId' => $user->id,
            'error' => null
        ];
        $date = $user->terms_accepted_at;
        if ($date) {
            $count = TermOfService::whereNotNull('published_at')
                ->where('published_at', '>', $date)
                ->count();
            if ($count > 0) {
                $jsonData['data'] = "yes";
            } else {
                $jsonData['error'] = 'Error checking for unaccepted terms';
            }
        }
        return response()->json($jsonData);
    }
}
