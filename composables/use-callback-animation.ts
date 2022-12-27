type CallbackAnimation = GSAPTween | GSAPTimeline | null;

// exploiting js objects :)
const animation = { value: null };

export default () => animation as { value: CallbackAnimation };
