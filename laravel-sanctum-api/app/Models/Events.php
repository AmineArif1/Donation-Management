<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    use HasFactory;
    protected $table = 'events';
    protected $fillable = [
        'id',
        'nomEvent',
        'dateEvent',
        'lieuEvent',
        'descriptionEvent',
        'imageEvent',
    ];
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
