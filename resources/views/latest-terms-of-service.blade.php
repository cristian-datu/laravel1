@extends('layouts.app')

@section('content')
<div class="container">
    <div class="card">
        <div class="card-header">
            <h1>Terms of Service</h1>
        </div>
        <div class="card-body">
            {!! $htmlContent !!}
        </div>
    </div>
</div>
@endsection
