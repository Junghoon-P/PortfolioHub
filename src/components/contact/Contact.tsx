import styled from '@emotion/styled';
import SectionCard from 'components/common/SectionCard';

import ContactContents from './ContactContents';
import ContactTitle from './ContactTitle';

const Contact = () => {
  return (
    <ContactCard id="CONTACT">
      <ContactTitle />
      <ContactContents />
    </ContactCard>
  );
};

const ContactCard = styled(SectionCard)`
  display: flex;
  justify-content: space-between;
`;

export default Contact;
