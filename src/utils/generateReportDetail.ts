export const getClarityDetail = (score: number) => {
  if (score >= 70) {
    return 'This answer is generally logical and has a good flow. But if you organize your answers a little more, there is room for improvement.';
  } else if (score <= 30) {
    return 'This answer has poor logical structure. You should organize your answers more.';
  } else {
    return 'This answer is not bad, but you can make more logical answer. There are ways to add more reference, or arrange your answer in concrete points.';
  }
};

export const getUniquenessDetail = (score: number) => {
  if (score >= 70) {
    return 'This answer shows your own opinion or experience compared to other answers. High Uniqueness gives good results on average. However, you need to make sure that your experience matches what the question intend';
  } else if (score <= 30) {
    return 'This answer is so typical and not special. Anyone can give these answers, so it is necessary to link your experiences more.';
  } else {
    return 'This answer is not bad, but you can contain your own opinion or experince more. It would be nice to make sure that the experience corresponds appropriately to the intention of the question..';
  }
};

export const getDepthDetail = (score: number) => {
  if (score >= 70) {
    return 'This answer shows your great understanding for the subject of the question. It can help to ensure the reference and logical structure to make your answer perfect.';
  } else if (score <= 30) {
    return 'This answer could not meet expectation of interviewer. You should study or research about contents of this question. It needs more depth to get minimum reputation.';
  } else {
    return 'This answer is somewhat basic. This may be enough in some cases, but knowing a little more depth can help. Check other answers or search to supplement your answers.';
  }
};

export const getFollowUpDetail = (score: number) => {
  if (score >= 70) {
    return 'This answer is likely to receive a lot of follow-up questions. If you receive a lot of follow-up questions, the probability of passing increases. It will be helpful to predict follow-up answers and practice.';
  } else if (score <= 30) {
    return 'This answer is too simple for you to receive follow-up questions, or you are likely to receive bad follow-up questions. Please revise it to lead the interview in a better direction if possible.';
  } else {
    return 'This answer is appropriate. However, it is said that the probability of passing increases when you receive the appropriate follow-up questions and give appropriate answers. Please supplement your answer from that perspective.';
  }
};
