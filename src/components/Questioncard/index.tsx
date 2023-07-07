import { Box, Heading, Flex } from '@chakra-ui/react';
import { QuestionCardProps } from '@/interface/index';
import Appbutton from '../button';

const Questioncard: React.FC<QuestionCardProps> = ({
  questions,
  callback,
  category,
  totalQuestions,
  questionNumber,
}) => {
  return (
    <>
      <Box bg="black" width="100%">
        <Box mb={6} fontSize="md" fontWeight="bold">
          your progress: {questionNumber}/{totalQuestions}
        </Box>
        <Box>{category}</Box>
        <Heading>
          <Box>{questions}</Box>
        </Heading>

        <Flex>
          <Box>
            <Appbutton
              value={'False'}
              onClick={callback}
              colorScheme={'aqua'}
              variant={'outline'}
              width="full"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Questioncard;
