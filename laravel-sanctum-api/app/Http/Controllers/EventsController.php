<?php

namespace App\Http\Controllers;

use App\Models\Events;
use Illuminate\Http\Request;

class EventsController extends Controller
{
    public function index()
    {
        return Events::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nomEvent' => 'required',
            'dateEvent' => 'required',
            'lieuEvent' => 'required',
            'descriptionEvent' => 'required',
            'imageEvent' => 'required',
        ]);
    
        if (!$request->hasFile('imageEvent')) {
            return response()->json(['error' => 'Image not found in request']);
        }
    
        $image = $request->file('imageEvent');
    
        if (!$image->isValid()) {
            return response()->json(['error' => 'Invalid image file']);
        }
    
        $path = $image->store('images', 'public');
    
        $validatedData['imageEvent'] = $path;
    
        $event = Events::create($validatedData);
    
        return response()->json($event, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Events::find($id);
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
        $Events = Events::find($id);
        $Events->update($request->all());
        return $Events;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Events::destroy($id);
    }

     /**
     * Search for a name
     *
     * @param  str  $name
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return Events::where('name', 'like', '%'.$name.'%')->get();
    }
}
