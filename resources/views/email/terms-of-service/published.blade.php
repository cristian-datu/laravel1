@component('mail::message')
# Terms of Service Notice

Dear User,

You receive this email because we are updating our Terms of Service.

To read the latest version, please click on the button below.

@component('mail::button', ['url' => $url])
{{ $termOfService->title }}
@endcomponent

Thanks,<br>
{{ config('app.name') }} team
@endcomponent
