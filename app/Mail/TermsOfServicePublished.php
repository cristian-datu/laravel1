<?php

namespace App\Mail;

use App\TermOfService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TermsOfServicePublished extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * Link to Terms of Service Page
     *
     * @var string
     */
    public $url = '#';

    /**
     * Published Term of Service
     *
     * @var \App\TermOfService
     */
    public $termOfService = null;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(TermOfService $termOfService)
    {
        $this->url = route('latest-terms-of-service');
        $this->termOfService = $termOfService;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject('Terms of Service Update Notification')
            ->markdown('email.terms-of-service.published');
    }
}
