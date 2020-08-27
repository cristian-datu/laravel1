<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\User;

class UsersUnverify extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'users:unverify {id}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Unverify user with provided id';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $id = (int)$this->argument('id');
        if ($id < 1) {
            $this->error("Invalid id: {$id}");
            return 1;
        }

        $user = User::find($id);
        if ($user) {
            if ($user->email_verified_at) {
                $user->email_verified_at = null;
                if ($user->save()) {
                    event(new \Illuminate\Auth\Events\Registered($user));
                    $this->info("User with ID {$id} has been unverified and notification was sent");
                } else {
                    $this->error("User with ID {$id} could not be modified");
                }
            } else {
                $this->error("User with ID {$id} has already been unverified");
            }
        } else {
            $this->error("User with ID {$id} does not exist");
        }

        return 0;
    }
}
