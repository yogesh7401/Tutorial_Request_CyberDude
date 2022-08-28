<?php

namespace App\Http\Controllers;

use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class sendmailController extends Controller
{
    function send(Request $request){
        $email = $request->input('email');
        $name = $request->input('name');
        $choice = implode(" , ", $request->input('choices'));

        $data = array(
            'email'      =>      $email,
            'choice'     =>      $choice,
            'name'       =>      $name
        );
        Mail::to($email)->send(new SendMail($data));
    }
}
