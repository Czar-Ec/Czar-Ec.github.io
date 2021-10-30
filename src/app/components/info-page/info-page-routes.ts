import { Routes } from '@angular/router';
import { ProjectsPageComponent } from './info-components/projects-page/projects-page.component';
import { IntroPageComponent } from './info-components/intro-page/intro-page.component';
import { ToolsPageComponent } from './info-components/tools-page/tools-page.component';

const routes: any = [
  { path: '', redirectTo: 'info' },
  {
    path: 'info',
    children: [
      {
        path: '',
        component: IntroPageComponent,
        label: 'Home',
        icon: 'home',
        data: { state: 'info' }
      },
      {
        path: 'projects',
        component: ProjectsPageComponent,
        label: 'Projects',
        icon: 'projects',
        data: { state: 'projects' }
      },
      {
        path: 'tools',
        component: ToolsPageComponent,
        label: 'Languages & Tools',
        icon: 'tools',
        data: { state: 'tools' }
      }
    ]
  },
  { path: '**', redirectTo: 'info' }
];

/**
 * Function that returns the routes as Angular Route object
 */
export function getInfoRoutes(): Routes {
  return routes as Routes;
}

/**
 * Function that returns routes for a given path
 * @param path
 */
export function getRoutesAtPath(path: string, routesArray?: any): { path: string, label: string }[] {
  if (path == null) {
    return [];
  }

  // if path is only '/' assume its an empty path
  if (path === '/') {
    path = '';
  }

  return getChildRoutesAtPath(path.split('/'), routesArray ? routesArray : routes);
}

/**
 * Returns routes in a provided path
 * @param path
 */
export function getChildRoutesAtPath(path: string[], routesArray: any): { path: string, label: string }[] {
  if (!path || path.length < 1) {
    return [];
  }

  // find the path in routes
  const pathRoutes = routesArray.find(route => route.path === path[0]);

  // if path was found, check next
  if (pathRoutes) {
    // remove checked path
    path.shift();
    return !!getChildRoutesAtPath(path, pathRoutes).length ? getChildRoutesAtPath(path, pathRoutes) : pathRoutes.children;
  }

  return [];
}
