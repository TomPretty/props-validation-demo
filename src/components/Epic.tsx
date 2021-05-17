import * as z from "zod";
import { withParsedProps } from "../hocs/withParsedProps";

export interface EpicProps {
  articleCount: number;
  sendComponentEvent?: () => void;
}

function Epic({ articleCount, sendComponentEvent }: EpicProps) {
  return (
    <div>
      You have read{" "}
      <button onClick={() => sendComponentEvent && sendComponentEvent()}>
        {articleCount} articles
      </button>{" "}
      this year.
    </div>
  );
}

const epicSchema = z.object({
  articleCount: z.number(),
  sendComponentEvent: z.any(),
});

const validate = (props: unknown): props is EpicProps => {
  const result = epicSchema.safeParse(props);
  return result.success;
};

const wrapped = withParsedProps(Epic, validate);

export { wrapped as Epic, Epic as EpicUnwrapped };
