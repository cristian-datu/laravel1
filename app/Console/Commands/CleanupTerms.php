<?php

namespace App\Console\Commands;

use App\TermOfService;
use Illuminate\Console\Command;

class CleanupTerms extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cleanup:terms';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Deletes all published terms that ar not "Currently Accepted Terms" of any users';

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
        $result = TermOfService::whereRaw('published_at > (SELECT MAX(terms_accepted_at) AS latest FROM users)')->delete();

        $this->info("{$result} entries deleted");

        return 0;
    }
}
