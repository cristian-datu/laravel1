<?php

use Illuminate\Database\Seeder;
use App\TermOfService;

class TermsOfServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(TermOfService::class, 5)->create();
        $last = TermOfService::latest('id')->first();
        $last->published_at = now();
        $last->save();
    }
}
