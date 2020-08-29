<?php

namespace App\Listeners;

use App\Events\TermsOfServicePublished;
use App\Mail\TermsOfServicePublished as MailTermsOfServicePublished;
use App\User;
use App\Jobs\SendEmail as SendEmailJob;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendTermsOfServiceNotification implements ShouldQueue
{

    use InteractsWithQueue;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle Event
     *
     * @param TermsOfServicePublished $event
     *
     * @return void
     */
    public function handle(TermsOfServicePublished $event)
    {
        $published_at = $event->termOfService->published_at;

        // Prepare Users
        $query = User::query()
            // that never agreed to any Terms of Service
            ->whereNull('terms_accepted_at')
            // or with outdated terms of service agreements
            ->orWhere('terms_accepted_at', '<', $published_at)
            // and make sure you don't repeat yourself
            ->distinct();

        // Fetch emails
        $emails = $query->get('email');

        if (count($emails) > 0) {
            foreach ($emails as $address) {
                Mail::to($address)->send(new MailTermsOfServicePublished($event->termOfService));
                //SendEmailJob::dispatch($address, new MailTermsOfServicePublished($event->termOfService));
            }
        }
    }
}
