<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Pending email that should run
     *
     * @var \Illuminate\Mail\PendingMail
     */
    protected $mail = null;

    /**
     * Target email address
     *
     * @var string
     */
    protected $to = '';

    /**
     * Create a new job instance.
     *
     * @return void
     */

    /**
     * Undocumented function
     *
     * @param string $to
     * @param \Illuminate\Mail\Mailable $email
     */
    public function __construct($to, Mailable $email)
    {
        $this->to = $to;
        $this->email = $email;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if ($this->to && $this->email) {
            Mail::to($this->to)->send($this->email);
        }
    }
}
