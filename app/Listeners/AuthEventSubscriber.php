<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Failed;
use Illuminate\Auth\Events\Lockout;
use \Illuminate\Events\Dispatcher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AuthEventSubscriber
{
    public $request;

    /**
     * Inject Request for future reference
     *
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Log unsuccessful events to /storage/logs/laravel.log
     *
     * @param Failed $event
     *
     * @return void
     */
    public function handleFailed(Failed $event)
    {
        $ip = $this->request->ip() ?? 'unknown IP address';
        $email = $event->credentials['email'] ?? 'unknown user';
        Log::warning("Failed login attempt by {$email} from {$ip}");
    }

    /**
     * Log lockout events to /storage/logs/laravel.log
     *
     * @param Lockout $event
     *
     * @return void
     */
    public function handleLockout(Lockout $event)
    {
        $ip = $this->request->ip() ?? 'unknown IP address';
        $email = request('email') ?? 'unknown user';
        Log::warning("Locking account {$email} from {$ip}");
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param  \Illuminate\Events\Dispatcher  $events
     */
    public function subscribe($events)
    {
        $events->listen(
            'Illuminate\Auth\Events\Failed',
            'App\Listeners\AuthEventSubscriber@handleFailed'
        );

        $events->listen(
            'Illuminate\Auth\Events\Lockout',
            'App\Listeners\AuthEventSubscriber@handleLockout'
        );
    }
}
