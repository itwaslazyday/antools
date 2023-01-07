import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageFooter } from '../page-footer/page-footer';
import { PageHeader } from '../page-header/page-header';

function Layout(): JSX.Element {
  return (
    <React.Fragment>
      <PageHeader/>
      <Outlet/>
      <PageFooter/>
    </React.Fragment>
  );
}

export {Layout};
