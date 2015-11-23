<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cardline extends Model
{
    protected $table = "cardlines";

    public static function findLinkID($lid)
    {
        return self::where('link_id', $lid)->get();
    }

    public function cardlink()
    {
        return $this->belongsTo('App\Link', 'link_id', 'id');
    }

    public function card()
    {
        return $this->morphTo();
    }

    public function overridePoints($lid)
    {
        return $this->cardline->card()->overridePoints($lid);
    }

    public function freePoints()
    {
        return $this->cardline->card()->freepoints;
    }
}
