<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Link;
use App\User;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Http\Controllers\MailController as Mail;

class LinkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public $link;
    public $user;
    public $mail
    
    public function __construct(Link $link,User $user, Mail $mail)
    {
        $this->link = $link;
        $this->user = $user;
        $this->mail = $mail;
        
    }

    public function index()
    {   
     
    }




    public function getRefLink($link = null)
    {
        try {

            
            $link = Link::where('link', $link)->firstOrFail();
           

            return view('pages.link')->with(compact(['link']));
        }
        catch(ModelNotFoundException $e) {
                $message = "Ooops! $link is Not Registered! ";
                return view('errors.503')->with('message', $message);
            }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}