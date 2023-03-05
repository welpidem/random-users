export function useRouteConstants(){
    const routePath = {
        home: '/users',
        profile: '/users/:id'
    }

    const routeName = {
        home: 'users',
        profile: 'userProfile'
    }

    return {routePath, routeName,}
}