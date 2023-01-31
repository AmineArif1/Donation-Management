<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partenaire extends Model
{
    use HasFactory;
    protected $primaryKey = 'idPartenaire';
    use HasFactory;
    protected $table = 'partenaire';
    protected $fillable = [
        'namePartenaire',
        'emailPartenaire',
        'logoPartenaire',
        'descriptionPartenaire',
    ];
    public function organizations(){
        return $this->belongsToMany(Organization::class);
    }

}
