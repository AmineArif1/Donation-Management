<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    protected $primaryKey = 'idOrganization';
    use HasFactory;
    protected $table = 'organization';
    protected $fillable = [
        'NomOrganization',
        'LieuOrganization',
        'ImageOrganization',
        'DescriptionOrganization',
    ];
    public function users()
{
    return $this->belongsToMany(User::class);
}


}

