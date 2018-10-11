import React from 'react';
import PageLayout from '@components/PageLayout';

import VerticalCollapsibleSplit from '@components/VerticalCollapsibleSplit';
// import VerticalSplit from '@components/VerticalSplit';
// import AssetTitle from '@containers/AssetTitle';
import AssetDisplay from '@containers/AssetDisplay';
import AssetInfo from '@containers/AssetInfo';
import ErrorPage from '@pages/ErrorPage';

class ShowAssetDetails extends React.Component {
  render () {
    const { asset } = this.props;
    if (asset) {
      const { claimData: { name } } = asset;
      return (
        <PageLayout
          pageTitle={`${name} - details`}
          asset={asset}
        >
          <VerticalCollapsibleSplit
            top={<AssetDisplay />}
            bottom={<AssetInfo />}
          />
        </PageLayout>
      );
    }
    return (
      <ErrorPage error={'loading asset data...'} />
    );
  }
};

export default ShowAssetDetails;
