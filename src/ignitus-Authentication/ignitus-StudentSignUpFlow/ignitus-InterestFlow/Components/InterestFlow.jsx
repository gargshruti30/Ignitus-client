/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import progress from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/progressPage2.png';
import {
  Paragraph,
  Heading1,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/typography';
import interestsImage from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/ignitus-Images/img-Png/interestsImage.png';
import { withErrorBoundary } from '../../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import * as T from '../../ignitus-WelcomeFlow/Styles/style';
import * as C from '../Styles/style';
import { RoundedPrimaryButton } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/buttons';
import { DefaultCheckbox } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultCheckbox/Components';

const InterestFlow = () => (
  <T.WelcomeContainer>
    <T.TopSection>
      <T.Progress src={progress} alt="progress-bar" />
      <Heading1>What are you interested in?</Heading1>
      <Paragraph>This will customize your experience.</Paragraph>
      <Paragraph>
        This will help you to discover right people and opportunities.
      </Paragraph>
    </T.TopSection>
    <T.MiddleSection>
      <C.LeftSection>
        {' '}
        <form>
          <C.CheckboxContainer>
            <DefaultCheckbox label="Opportunities" value="true" />
          </C.CheckboxContainer>
          <C.CheckboxContainer>
            <DefaultCheckbox label="Build Network" value="true" />
          </C.CheckboxContainer>
          <C.CheckboxContainer>
            <DefaultCheckbox label="Read Blogs" value="true" />
          </C.CheckboxContainer>
          <C.CheckboxContainer>
            <DefaultCheckbox label="All of these" value="true" />
          </C.CheckboxContainer>
        </form>
      </C.LeftSection>
      <C.RightSection>
        <C.InterestImage src={interestsImage} alt="interests" />
      </C.RightSection>
    </T.MiddleSection>
    <T.BottomSection>
      <RoundedPrimaryButton>
        <Link to="/flow/emailFlow">Save & Continue</Link>
      </RoundedPrimaryButton>
      <Paragraph>
        Skip for now
        {' >> '}
      </Paragraph>
    </T.BottomSection>
  </T.WelcomeContainer>
);

export default withErrorBoundary(InterestFlow);
