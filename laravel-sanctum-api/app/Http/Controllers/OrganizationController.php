<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Organization;
use App\Models\User;

use function PHPSTORM_META\map;

class OrganizationController extends Controller
{
    public function index()
    {
        return Organization::all();
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
            'NomOrganization' => 'required',
            'LieuOrganization' => 'required',
           
        ]);
        return Organization::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Organization::find($id);
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
        $Organization = Organization::find($id);
        $Organization->update($request->all());
        return $Organization;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Organization::destroy($id);
    }

     /**
     * Search for a name
     *
     * @param  str  $name
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return Organization::where('name', 'like', '%'.$name.'%')->get();
    }
    public function userOrganization($id)

    {
        $user = User::find($id);
        $organizations = Organization::join('donation', 'donation.idOrganization', '=', 'organization.idOrganization')
    ->where('donation.id', $user->id)
    ->get();
        return $organizations;
    }
}
