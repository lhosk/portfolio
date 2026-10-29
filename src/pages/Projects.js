import React from 'react';
import { style_section } from '../components/styles';
import { PageHeader } from '../components/DetailPage';
import FilterGrid from '../components/FilterGrid';
import { projects } from '../data/projects';

function Projects() {
  return (
    <main style={style_section}>
      <PageHeader title="Projects" />
      <FilterGrid items={projects} />
    </main>
  );
}

export default Projects;
