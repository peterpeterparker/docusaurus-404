import React from 'react';
import {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
export default function Index() {
  const title = translate({
    id: 'theme.NotFound.title',
    message: 'Page Not Found',
  });
  return (
    <>
      <PageMetadata title={title} />
      <Layout>
        <div style={{fontSize: "3rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -150%)"}}>
            Joyeux Noël 🎄
        </div>
      </Layout>
    </>
  );
}
