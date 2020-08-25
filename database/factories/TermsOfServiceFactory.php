<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\TermOfService;
use Faker\Generator as Faker;

$factory->define(TermOfService::class, function (Faker $faker) {
    return [
        'title' => $faker->unique()->text(),
        'content' => '<p>' . implode('</p><p>', $faker->paragraphs(10, false)) . '</p>',
        'published_at' => null, //$faker->dateTimeThisYear()
    ];
});
