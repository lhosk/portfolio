import React from "react";
import DetailPage, { Card, Prose, Figure, FigureGrid } from "../../components/DetailPage";
import parallel1 from "../../assets/images/parallel1.png";
import parallel2 from "../../assets/images/parallel2.png";

function Parallel() {
  return (
    <DetailPage title="Parallel Computing"
      stack="C++ · OpenMP · Pthreads · Parallel Computing · Numerical Integration · Performance Optimization · SLURM · HPC"
      links={[{ label: "View on GitHub", href: "https://github.com/lhosk/Parallel-Computing" }]}>
      <Card label="Overview">
        <Prose>
          <p>Explores high-performance parallel computing using OpenMP and Pthreads to measure runtime efficiency and thread-level performance. My first multi-threaded project on an HPC cluster.</p>
          <p>Each implementation computes a numerical integration task, dividing work among multiple threads to compare execution time, synchronization, and scheduling strategies. All jobs were run via Slurm on the UNCC HPC using Bash, WinSCP, and PuTTY.</p>
        </Prose>
      </Card>
      <Card label="Results">
        <FigureGrid>
          <Figure src={parallel1} alt="OpenMP performance results" caption="OpenMP" />
          <Figure src={parallel2} alt="Pthreads performance results" caption="Pthreads" />
        </FigureGrid>
      </Card>
    </DetailPage>
  );
}
export default Parallel;
