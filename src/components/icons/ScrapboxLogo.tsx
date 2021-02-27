import styled from "@emotion/styled";

import { ClassName, WidthHeight } from "../../types/props";

export namespace ScrapboxLogo {
  export interface Props extends ClassName, WidthHeight {}

  export const Presentation: React.FC<Props> = (props) => (
    <svg
      {...props}
      display="inline"
      viewBox="5 5 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Scrapbox"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.892 5.19446C20.3994 4.93547 19.602 4.93489 19.1083 5.19446L10.8918 9.51474C10.6528 9.64046 10.4356 9.86348 10.2755 10.1249L18.5055 14.4074C18.7008 14.4823 18.8702 14.6307 18.9713 14.8381C19.034 14.9667 19.0634 15.1037 19.0628 15.2385C19.0634 15.3732 19.034 15.5101 18.9713 15.6387C18.8702 15.8461 18.7009 15.9945 18.5056 16.0694L10.2721 20.3536C10.4324 20.6171 10.6507 20.8422 10.8918 20.9689L19.466 25.4773C19.761 25.6324 19.7604 25.8842 19.466 26.039L10.8918 30.5474C10.3993 30.8064 10.3982 31.2257 10.8918 31.4853L19.1083 35.8055C19.6009 36.0645 20.3983 36.0651 20.892 35.8055L29.1083 31.4853C29.2855 31.3921 29.4506 31.2454 29.5894 31.0693L21.5286 26.8291C21.2295 26.6717 21.0584 26.3573 21.0615 26.0325V26.0302C21.0584 25.7054 21.2295 25.391 21.5286 25.2336L29.8416 20.8609C29.6808 20.5079 29.4127 20.1911 29.1083 20.0311L20.5343 15.5227C20.2393 15.3676 20.2399 15.1158 20.5343 14.961L29.1083 10.4526C29.6008 10.1936 29.6019 9.77431 29.1083 9.51474L20.892 5.19446ZM30 29.303V22.7596L23.7803 26.0313L30 29.303ZM16.3014 15.2384L10 11.9594V18.5173L16.3014 15.2384Z"
        fill="currentcolor"
      />
    </svg>
  );

  export const Styled = styled(Presentation)`
    width: ${({ width }) => width ?? ""};
    height: ${({ height }) => height};
  `;
}
