<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Vote;

class VoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $courses = DB::table('forms')
        ->select('course')
        ->orderBy('id', 'asc')
        ->get();
        foreach ($courses as $p) {
            $key = $p->course;
            $comma = "," ;
            $reqs = $comma.$key.''.$comma;
            $id = DB::table('votes')->orwhere('requests', 'like', '%'.$reqs.'%')->get() ;
            $vote[]= count($id);
        }
        return response()->json($vote);
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
        $trimed = array_map('trim', $request->input('choices'));
        $choice = implode(",", $trimed);
        // $choices =  $request->input('choices');
        $vote = new Vote();
        $vote->email = $request->input('email'); 
        $comma = "," ;
        $reqs = $comma.$choice.$comma;
        $vote->requests = $reqs;
        $vote->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $courses = DB::table('votes')
                    ->select('requests')
                    ->where('email', $id)
                    ->get();
        return $courses;
        // return response()->json($courses);
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
