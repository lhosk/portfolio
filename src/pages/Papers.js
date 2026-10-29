import React from 'react';
import { style_section } from '../components/styles';
import { PageHeader } from '../components/DetailPage';
import FilterGrid from '../components/FilterGrid';
import { papers } from '../data/projects';

function Papers() {
  return (
    <main style={style_section}>
      <PageHeader title="Papers" />
      <FilterGrid items={papers} />
    </main>
  );
}

export default Papers;
