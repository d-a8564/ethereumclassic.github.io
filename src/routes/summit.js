import React from 'react';
import ButtonLink from '~components/buttonLink';

import PageLayout from '../layouts/pageLayout';

const Summit = () => {
  return (
    <PageLayout>
      <h1>Summit</h1>
      <h3>This page will be updated in due course</h3>
      <ButtonLink text="Summit 2019 Videos" to="/summit/2019" />
      <br />
      <ButtonLink text="2019 Main Website" to="https://etcsummit.com/" />
    </PageLayout>
  );
};

export default Summit;
