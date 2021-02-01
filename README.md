# backendTechStuff

Posts Endpoints: 

/api/posts

Get('/') - returns array of all posts

Get('/id') - returns post by ID

Post('/')(requires body) - returns newly created post

Delete('/id') - returns message confirming deletion

Put('/id')(requires Body & ID) - returns updated post


User Endpoints: 

/api/users

Get('/') - returns array of all posts (MUST BE ADMIN)


Auth Endpoints:

/api/auth

Post('/register')(requires body) - returns newly created user

Post('/login')(requires body) - returns welcome message and token


