<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\organizationPartenaire;
use \App\Models\Organization;
use \App\Models\Partenaire;
class organizationPartenaireController extends Controller
{
    public function index()
    {
        return organizationPartenaire::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'idOrganization' => 'required',
            
        ]);
        
        // $user =Partenaire::where('id', $request->id)->first();
        // $organization =Organization::where('idOrganization', $request->id)->first();

        // echo $user->email;
        // MailController::basic_email($user, $request->somme,$organization);
        return organizationPartenaire::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return organizationPartenaire::find($id);
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
        $organizationPartenaire = organizationPartenaire::find($id);
        $organizationPartenaire->update($request->all());
        return $organizationPartenaire;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return organizationPartenaire::destroy($id);
    }

     /**
     * Search for a name
     *
     * @param  str  $name
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return organizationPartenaire::where('name', 'like', '%'.$name.'%')->get();
    }}