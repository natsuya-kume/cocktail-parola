import DashboardLayout from 'src/pages/dashboard'
import { RouteType } from 'src/config/routes/routeType'
import DefaultPage from 'src/pages/dashboard/default'
import ChangelogPage from 'src/pages/changelog'
import AnalyticsPage from 'src/pages/dashboard/analytics'
import SaasPage from 'src/pages/dashboard/saas'
import ComponentPageLayout from 'src/pages/component/componentLayout'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import AlertPage from 'src/pages/component/alert'
import ButtonPage from 'src/pages/component/button'
import InstallationPage from 'src/pages/installation'
import DocumentationPage from 'src/pages/documentation'

export const appRoutes: RouteType[] = [
  {
    path: '/installation',
    element: <InstallationPage />,
    state: 'installation',
    sidebarProps: {
      displayText: 'Installation',
      icon: <FileDownloadOutlinedIcon />,
    },
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'Dashboard',
      icon: <DashboardOutlinedIcon />,
    },
    child: [
      {
        path: '/dashboard/default',
        element: <DefaultPage />,
        state: 'dashboard.default',
        sidebarProps: {
          displayText: 'Default',
        },
      },
      {
        path: '/dashboard/analytics',
        element: <AnalyticsPage />,
        state: 'dashboard.analytics',
        sidebarProps: {
          displayText: 'Analytics',
        },
      },
      {
        path: '/dashboard/saas',
        element: <SaasPage />,
        state: 'dashboard.saas',
        sidebarProps: {
          displayText: 'Saas',
        },
      },
    ],
  },
  {
    path: '/component',
    element: <ComponentPageLayout />,
    state: 'component',
    sidebarProps: {
      displayText: 'Components',
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: '/component/alert',
        element: <AlertPage />,
        state: 'component.alert',
        sidebarProps: {
          displayText: 'Alert',
        },
      },
      {
        path: '/component/button',
        element: <ButtonPage />,
        state: 'component.button',
        sidebarProps: {
          displayText: 'Button',
        },
      },
    ],
  },
  {
    path: '/documentation',
    element: <DocumentationPage />,
    state: 'documentation',
    sidebarProps: {
      displayText: 'Documentation',
      icon: <ArticleOutlinedIcon />,
    },
  },
  {
    path: '/changelog',
    element: <ChangelogPage />,
    state: 'changelog',
    sidebarProps: {
      displayText: 'Changelog',
      icon: <FormatListBulletedOutlinedIcon />,
    },
  },
]
