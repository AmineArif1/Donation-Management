<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class organizationPartenaire extends Model
{
    use HasFactory;
    protected $table = 'organization_partenaires';
    protected $fillable = [
        'id',
        'idOrganization',
    ];
}
