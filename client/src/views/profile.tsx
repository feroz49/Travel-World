<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $user->name }} | Profile</title>
    <link rel="stylesheet" href="{{ asset('css/profile.css') }}">
</head>
<body>

<div class="profile-container">

    <div class="profile-card">
        <!-- PROFILE IMAGE -->
        <div class="profile-img">
            <img src="{{ asset('images/' . $user->photo) }}" alt="{{ $user->name }}">
        </div>

        <!-- PROFILE INFO -->
        <h2>{{ $user->name }}</h2>
        <p class="email">{{ $user->email }}</p>
        @if(isset($user->experience))
            <p class="experience">Experience: {{ $user->experience }} years</p>
        @endif
        @if(isset($user->bio))
            <p class="bio">{{ $user->bio }}</p>
        @endif

        <!-- RATING -->
        @if(isset($user->rating))
        <div class="rating">
            {!! str_repeat('⭐️', $user->rating) !!}
        </div>
        @endif

        <!-- BUTTONS -->
        <div class="buttons">
            <a href="{{ route('profile.edit', $user->id) }}" class="btn-edit">Edit Profile</a>
            <a href="{{ route('home') }}" class="btn-back">← Back to Home</a>
        </div>
    </div>

</div>

</body>
</html>