<?php

namespace App\Events;

use App\TermOfService;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class TermsOfServicePublished
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Changed Terms Of Service
     *
     * @var \App\TermOfService
     */
    public $termOfService = null;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(TermOfService $termOfService)
    {
        $this->termOfService = $termOfService;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
