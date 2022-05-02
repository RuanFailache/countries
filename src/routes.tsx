import { lazy, LazyExoticComponent, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'

const LoadingContent = <div>Carregando...</div>

interface IRoute {
  path: string
  Element: LazyExoticComponent<() => JSX.Element>
}

const routes: IRoute[] = [
  {
    path: '/',
    Element: lazy(() => import('./pages/Home')),
  },
  {
    path: 'country/:name',
    Element: lazy(() => import('./pages/Country')),
  },
]

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={LoadingContent}>
                <route.Element />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
