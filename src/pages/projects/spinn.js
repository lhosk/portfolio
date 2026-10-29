import React from "react";
import DetailPage, { Card, Prose, Figure, FigureGrid } from "../../components/DetailPage";
import img6 from "../../assets/images/6.png";
import img14 from "../../assets/images/14.png";
import imgComparing from "../../assets/images/comparing.png";
import imgPinn from "../../assets/images/pinn.png";
import imgStochasticPeriod from "../../assets/images/stochastic_period.png";
import imgStochasticWaveHeight from "../../assets/images/stochastic_waveheight.png";

function Spinn() {
  return (
    <DetailPage title="Stochastic Physics Informed Neural Network"
      stack="Python · PyTorch · PINNs · RNNs · Stochastic Modeling · Ocean Wave Physics · Time-Series Forecasting · AWS SageMaker"
      links={[{ label: "View on GitHub", href: "https://github.com/lhosk/stochastic-pinn" }]}>
      <Card label="Overview">
        <Prose>
          <p>Investigates Physics-Informed Neural Networks and Stochastic PINNs for long-horizon ocean wave forecasting. The core idea is to embed known physical constraints directly into neural network training, rather than relying purely on data-driven models.</p>
          <p>By incorporating stochastic elements into the physics loss and initial conditions, the model captures uncertainty in the underlying dynamics and produces more physically meaningful predictions. The model predicts wave height 3 days into the future using NDBC buoy data off the coast of Wilmington, NC.</p>
        </Prose>
      </Card>
      <Card label="Results">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <FigureGrid>
            <Figure src={img6} alt="Forecast using 10 years of data and 6 features" caption="10 year data — 6 features" />
            <Figure src={img14} alt="Forecast using 10 years of data and 14 features" caption="10 year data — 14 features" />
          </FigureGrid>
          <Figure src={imgComparing} alt="Days vs years models compared" caption="Days vs Years models" />
          <Figure src={imgPinn} alt="PINN vs baseline RNN vs true data" caption="PINN vs Baseline RNN vs True Data" />
          <FigureGrid>
            <Figure src={imgStochasticPeriod} alt="Stochastic model wave period prediction" caption="Stochastic model — wave period prediction" />
            <Figure src={imgStochasticWaveHeight} alt="Stochastic model wave height prediction" caption="Stochastic model — wave height prediction" />
          </FigureGrid>
        </div>
      </Card>
    </DetailPage>
  );
}
export default Spinn;
