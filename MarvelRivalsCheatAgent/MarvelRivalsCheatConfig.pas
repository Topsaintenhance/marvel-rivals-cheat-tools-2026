{ MarvelRivalsCheat configuration unit }
unit MarvelRivalsCheatConfig;

interface

const
  APP_NAME = 'MarvelRivalsCheat';
  APP_CHANNEL = 'github-pages';
  APP_KEYWORD = 'marvel rivals cheat';

type
  TAppPaths = record
    DataDir: string;
    LogFile: string;
  end;

function DefaultPaths: TAppPaths;

implementation

function DefaultPaths: TAppPaths;
begin
  Result.DataDir := 'data';
  Result.LogFile := 'data/agent.log';
end;

end.
