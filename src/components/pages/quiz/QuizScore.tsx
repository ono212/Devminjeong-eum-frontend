import ScoreResultSvg from '@/components/svg-component/ScoreResultSvg';

type Props = {
  score: number;
  userName: string;
};

export default function QuizScore({ score, userName }: Props) {
  return (
    <div className="w-full max-h-[374px] overflow-hidden relative flex justify-center">
      <div className="absolute top-[30%] text-center">
        <p>
          <span className="font-semibold text-[#313140] text-[18px] mr-1">
            {userName}
          </span>
          <span className="text-[#313140] font-medium">
            님의 <br />
            개발 용어 발음 실력은
          </span>
        </p>
        <div
          className={`font-gugi text-main-blue ${score.toString().length > 2 ? `text-[64px]` : `text-[70px]`}`}
        >
          {score}점
        </div>
      </div>
      <ScoreResultSvg />
    </div>
  );
}
