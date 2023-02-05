<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\OrganizationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PartenaireController;
use App\Http\Controllers\OrganizationPartenaireController;
use App\Http\Controllers\UserEventsController;
use App\Http\Controllers\EventsController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::resource('products', ProductController::class);

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::get('/products/search/{name}', [ProductController::class, 'search']);
// organizations
Route::get('/organizations', [OrganizationController::class, 'index']);
Route::get('/organization/{id}', [OrganizationController::class, 'show']);
Route::get('/organization/search/{name}', [OrganizationController::class, 'search']);
// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/products', [ProductController::class, 'store']);
    Route::put('/products/{id}', [ProductController::class, 'update']);
    Route::delete('/products/{id}', [ProductController::class, 'destroy']);
    // organizations
    Route::post('/organizations', [OrganizationController::class, 'store']);
    Route::put('/organizations/{id}', [OrganizationController::class, 'update']);
    Route::delete('/organizations/{id}', [OrganizationController::class, 'destroy']);
    Route::get('/organizationOfUser/{id}', [OrganizationController::class,'userOrganization']);
    Route::get('/partenaireOfOrganization/{id}', [OrganizationController::class,'userOrganization']);

    // Donations
    Route::post('/donations', [DonationController::class, 'store']);
    Route::put('/donation/{id}', [DonationController::class, 'update']);
    Route::delete('/donation/{id}', [DonationController::class, 'destroy']);
    Route::post('/logout', [AuthController::class, 'logout']);
    // Partenaire
    Route::get('/partenaire', [PartenaireController::class, 'index']);
    Route::get('/partenaire/{id}', [PartenaireController::class, 'show']);
    Route::post('/partenaire', [PartenaireController::class, 'store']);
    Route::put('/partenaire/{id}', [PartenaireController::class, 'update']);
    Route::delete('/partenaire/{id}', [PartenaireController::class, 'destroy']);
    Route::get('/partenaire/search/{name}', [PartenaireController::class, 'search']);
    // PartenaireOrganization
    Route::get('/partenaireOrganization', [organizationPartenaireController::class, 'index']);
    Route::get('/partenaireOrganization/{id}', [organizationPartenaireController::class, 'show']);
    Route::post('/partenaireOrganization', [organizationPartenaireController::class, 'store']);
    Route::put('/partenaireOrganization/{id}', [organizationPartenaireController::class, 'update']);
    Route::delete('/partenaireOrganization/{id}', [organizationPartenaireController::class, 'destroy']);
    Route::get('/partenaireOrganization/search/{name}', [organizationPartenaireController::class, 'search']);
    // Events
    Route::get('/events', [EventsController::class, 'index']);
    Route::get('/events/{id}', [EventsController::class, 'show']);
    Route::post('/events', [EventsController::class, 'store']);
    Route::put('/events/{id}', [EventsController::class, 'update']);
    Route::delete('/events/{id}', [EventsController::class, 'destroy']);
    Route::get('/events/search/{name}', [EventsController::class, 'search']);
    // UserEvents
    Route::get('/userEvents', [UserEventsController::class, 'index']);
    Route::get('/userEvents/{id}', [UserEventsController::class, 'show']);
    Route::post('/userEvents', [UserEventsController::class, 'store']);
    Route::put('/userEvents/{id}', [UserEventsController::class, 'update']);
    Route::delete('/userEvents/{id}', [UserEventsController::class, 'destroy']);
    Route::get('/userEvents/search/{name}', [UserEventsController::class, 'search']);


});

Route::post('/admin/addEvent', function (Request $request) {
    if (!$request->hasFile('image')) {
        return response()->json(['error' => 'Image not found in request']);
    }

    $image = $request->file('image');
    if (!$image->isValid()) {
        return response()->json(['error' => 'Invalid image file']);
    }

    $path = $image->store('images', 'public');

    return response()->json(['path' => "/storage/$path"]);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
