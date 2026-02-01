using UclBackend.Data;
using UclBackend.Models;

namespace UclBackend
{
    public static class DataSeeder
    {
        public static void Seed(UclDbContext context)
        {
            if (!context.Clubs.Any())
            {
                context.Clubs.AddRange(
                    new ClubDetails { ClubId = "real-madrid", Name = "Real Madrid CF", FoundedYear = 1902, UclSeasons = 54, UclFinalsPlayed = 18, UclFinalsWon = 15 },
                    new ClubDetails { ClubId = "ac-milan", Name = "AC Milan", FoundedYear = 1899, UclSeasons = 31, UclFinalsPlayed = 11, UclFinalsWon = 7 },
                    new ClubDetails { ClubId = "liverpool", Name = "Liverpool FC", FoundedYear = 1892, UclSeasons = 27, UclFinalsPlayed = 10, UclFinalsWon = 6 },
                    new ClubDetails { ClubId = "bayern-munich", Name = "FC Bayern Munich", FoundedYear = 1900, UclSeasons = 41, UclFinalsPlayed = 11, UclFinalsWon = 6 },
                    new ClubDetails { ClubId = "barcelona", Name = "FC Barcelona", FoundedYear = 1899, UclSeasons = 30, UclFinalsPlayed = 8, UclFinalsWon = 5 },
                    new ClubDetails { ClubId = "ajax", Name = "Ajax FC", FoundedYear = 1900, UclSeasons = 30, UclFinalsPlayed = 6, UclFinalsWon = 4 },
                    new ClubDetails { ClubId = "man-united", Name = "Manchester United FC", FoundedYear = 1878, UclSeasons = 25, UclFinalsPlayed = 5, UclFinalsWon = 3 },
                    new ClubDetails { ClubId = "inter-milan", Name = "FC Internazionale Milano", FoundedYear = 1908, UclSeasons = 24, UclFinalsPlayed = 6, UclFinalsWon = 3 },
                    new ClubDetails { ClubId = "chelsea", Name = "Chelsea FC", FoundedYear = 1905, UclSeasons = 19, UclFinalsPlayed = 3, UclFinalsWon = 2 },
                    new ClubDetails { ClubId = "nottingham-forest", Name = "Nottingham Forest FC", FoundedYear = 1865, UclSeasons = 3, UclFinalsPlayed = 2, UclFinalsWon = 2 },
                    new ClubDetails { ClubId = "benfica", Name = "SL Benfica", FoundedYear = 1904, UclSeasons = 42, UclFinalsPlayed = 7, UclFinalsWon = 2 },
                    new ClubDetails { ClubId = "juventus", Name = "Juventus FC", FoundedYear = 1897, UclSeasons = 36, UclFinalsPlayed = 9, UclFinalsWon = 2 },
                    new ClubDetails { ClubId = "porto", Name = "FC Porto", FoundedYear = 1893, UclSeasons = 27, UclFinalsPlayed = 2, UclFinalsWon = 2 },
                    new ClubDetails { ClubId = "psg", Name = "PSG FC", FoundedYear = 1970, UclSeasons = 15, UclFinalsPlayed = 1, UclFinalsWon = 0 },
                    new ClubDetails { ClubId = "man-city", Name = "Manchester City FC", FoundedYear = 1880, UclSeasons = 13, UclFinalsPlayed = 2, UclFinalsWon = 1 },
                    new ClubDetails { ClubId = "dortmund", Name = "Borussia Dortmund", FoundedYear = 1909, UclSeasons = 18, UclFinalsPlayed = 3, UclFinalsWon = 1 },
                    new ClubDetails { ClubId = "feyenoord", Name = "Feyenoord", FoundedYear = 1908, UclSeasons = 18, UclFinalsPlayed = 1, UclFinalsWon = 1 },
                    new ClubDetails { ClubId = "marseille", Name = "Olympique de Marseille", FoundedYear = 1899, UclSeasons = 16, UclFinalsPlayed = 2, UclFinalsWon = 1 },
                    new ClubDetails { ClubId = "aston-villa", Name = "Aston Villa FC", FoundedYear = 1874, UclSeasons = 2, UclFinalsPlayed = 1, UclFinalsWon = 1 },
                    new ClubDetails { ClubId = "hamburger", Name = "Hamburger SV", FoundedYear = 1887, UclSeasons = 3, UclFinalsPlayed = 2, UclFinalsWon = 1 },
                    new ClubDetails { ClubId = "red-star", Name = "Crvena Zvezda", FoundedYear = 1945, UclSeasons = 28, UclFinalsPlayed = 1, UclFinalsWon = 1 },
                    new ClubDetails { ClubId = "fcsb", Name = "FCSB", FoundedYear = 1947, UclSeasons = 28, UclFinalsPlayed = 2, UclFinalsWon = 1 },
                    new ClubDetails { ClubId = "psv", Name = "PSV Eindhoven", FoundedYear = 1913, UclSeasons = 29, UclFinalsPlayed = 1, UclFinalsWon = 1 },
                    new ClubDetails { ClubId = "celtic", Name = "Celtic FC", FoundedYear = 1887, UclSeasons = 37, UclFinalsPlayed = 2, UclFinalsWon = 1 }
                );
            }

            if (!context.Players.Any())
            {
                context.Players.AddRange(
                    new PlayerDetails { PlayerId = "cristiano-ronaldo", Name = "Cristiano Ronaldo", Birthday = "1985-02-05", CareerGoals = 140, CareerAssists = 42, MarketValue = "€15M", Biography = "UCL all-time top scorer." },
                    new PlayerDetails { PlayerId = "lionel-messi", Name = "Lionel Messi", Birthday = "1987-06-24", CareerGoals = 129, CareerAssists = 40, MarketValue = "€30M", Biography = "Barcelona legend." },
                    new PlayerDetails { PlayerId = "robert-lewandowski", Name = "Robert Lewandowski", Birthday = "1988-08-21", CareerGoals = 105, CareerAssists = 25, MarketValue = "€15M", Biography = "Top striker for Bayern and Barca." },
                    new PlayerDetails { PlayerId = "karim-benzema", Name = "Karim Benzema", Birthday = "1987-12-19", CareerGoals = 90, CareerAssists = 29, MarketValue = "€10M", Biography = "Real Madrid icon." },
                    new PlayerDetails { PlayerId = "raul", Name = "Raúl", Birthday = "1977-06-27", CareerGoals = 71, CareerAssists = 20, MarketValue = "Retired", Biography = "Real Madrid legend." },
                    new PlayerDetails { PlayerId = "thomas-muller", Name = "Thomas Müller", Birthday = "1989-09-13", CareerGoals = 54, CareerAssists = 30, MarketValue = "€10M", Biography = "Bayern life-long player." },
                    new PlayerDetails { PlayerId = "ruud-van-nistelrooy", Name = "Ruud van Nistelrooy", Birthday = "1976-07-01", CareerGoals = 56, CareerAssists = 10, MarketValue = "Retired", Biography = "Deadly finisher." },
                    new PlayerDetails { PlayerId = "kylian-mbappe", Name = "Kylian Mbappé", Birthday = "1998-12-20", CareerGoals = 48, CareerAssists = 24, MarketValue = "€180M", Biography = "French superstar." },
                    new PlayerDetails { PlayerId = "thierry-henry", Name = "Thierry Henry", Birthday = "1977-08-17", CareerGoals = 50, CareerAssists = 15, MarketValue = "Retired", Biography = "Arsenal legend." },
                    new PlayerDetails { PlayerId = "erling-haaland", Name = "Erling Haaland", Birthday = "2000-07-21", CareerGoals = 44, CareerAssists = 5, MarketValue = "€180M", Biography = "Goal machine." },
                    new PlayerDetails { PlayerId = "andriy-shevchenko", Name = "Andriy Shevchenko", Birthday = "1976-09-29", CareerGoals = 48, CareerAssists = 10, MarketValue = "Retired", Biography = "AC Milan hero." },
                    new PlayerDetails { PlayerId = "zlatan-ibrahimovic", Name = "Zlatan Ibrahimović", Birthday = "1981-10-03", CareerGoals = 48, CareerAssists = 26, MarketValue = "Retired", Biography = "The Zlatan." },
                    new PlayerDetails { PlayerId = "mohamed-salah", Name = "Mohamed Salah", Birthday = "1992-06-15", CareerGoals = 44, CareerAssists = 15, MarketValue = "€65M", Biography = "Liverpool's Egyptian King." },
                    new PlayerDetails { PlayerId = "filippo-inzaghi", Name = "Filippo Inzaghi", Birthday = "1973-08-09", CareerGoals = 46, CareerAssists = 5, MarketValue = "Retired", Biography = "Milan's poacher." },
                    new PlayerDetails { PlayerId = "neymar", Name = "Neymar Jr", Birthday = "1992-02-05", CareerGoals = 43, CareerAssists = 33, MarketValue = "€45M", Biography = "Brazilian magician." },
                    new PlayerDetails { PlayerId = "eusebio", Name = "Eusébio", Birthday = "1942-01-25", CareerGoals = 46, CareerAssists = 0, MarketValue = "Legend", Biography = "Benfica's Black Panther." },
                    new PlayerDetails { PlayerId = "didier-drogba", Name = "Didier Drogba", Birthday = "1978-03-11", CareerGoals = 44, CareerAssists = 12, MarketValue = "Retired", Biography = "Chelsea's final hero." },
                    new PlayerDetails { PlayerId = "del-piero", Name = "Alessandro Del Piero", Birthday = "1974-11-09", CareerGoals = 42, CareerAssists = 10, MarketValue = "Retired", Biography = "Juventus legend." },
                    new PlayerDetails { PlayerId = "antoine-griezmann", Name = "Antoine Griezmann", Birthday = "1991-03-21", CareerGoals = 42, CareerAssists = 15, MarketValue = "€25M", Biography = "Atletico Madrid star." },
                    new PlayerDetails { PlayerId = "angel-di-maria", Name = "Ángel Di María", Birthday = "1988-02-14", CareerGoals = 22, CareerAssists = 41, MarketValue = "€3M", Biography = "Argentinian magic." },
                    new PlayerDetails { PlayerId = "ryan-giggs", Name = "Ryan Giggs", Birthday = "1973-11-29", CareerGoals = 28, CareerAssists = 31, MarketValue = "Retired", Biography = "Manchester United legend." },
                    new PlayerDetails { PlayerId = "xavi-hernandez", Name = "Xavi Hernández", Birthday = "1980-01-25", CareerGoals = 11, CareerAssists = 30, MarketValue = "Retired", Biography = "Barcelona's midfield maestro." },
                    new PlayerDetails { PlayerId = "andres-iniesta", Name = "Andrés Iniesta", Birthday = "1984-05-11", CareerGoals = 11, CareerAssists = 29, MarketValue = "Retired", Biography = "Barcelona iconic midfielder." },
                    new PlayerDetails { PlayerId = "cesc-fabregas", Name = "Cesc Fàbregas", Birthday = "1987-05-04", CareerGoals = 19, CareerAssists = 26, MarketValue = "Retired", Biography = "Visionary playmaker." },
                    new PlayerDetails { PlayerId = "luis-suarez", Name = "Luis Suárez", Birthday = "1987-01-24", CareerGoals = 27, CareerAssists = 26, MarketValue = "€3M", Biography = "Deadly Uruguayan striker." },
                    new PlayerDetails { PlayerId = "franck-ribery", Name = "Franck Ribéry", Birthday = "1983-04-07", CareerGoals = 18, CareerAssists = 25, MarketValue = "Retired", Biography = "Bayern Munich legend." },
                    new PlayerDetails { PlayerId = "marcelo", Name = "Marcelo", Birthday = "1988-05-12", CareerGoals = 9, CareerAssists = 24, MarketValue = "€1M", Biography = "Real Madrid's attacking LB." },
                    new PlayerDetails { PlayerId = "mesut-ozil", Name = "Mesut Özil", Birthday = "1988-10-15", CareerGoals = 11, CareerAssists = 24, MarketValue = "Retired", Biography = "The assist king." },
                    new PlayerDetails { PlayerId = "dani-alves", Name = "Dani Alves", Birthday = "1983-05-06", CareerGoals = 12, CareerAssists = 23, MarketValue = "Retired", Biography = "Most decorated player." },
                    new PlayerDetails { PlayerId = "vinicius-junior", Name = "Vinícius Júnior", Birthday = "2000-07-12", CareerGoals = 20, CareerAssists = 24, MarketValue = "€200M", Biography = "Real Madrid star.", Position = "ATK", Team = "Real Madrid" },
                    // CURRENT PLAYERS FOR FANTASY
                    new PlayerDetails { PlayerId = "thibaut-courtois", Name = "Thibaut Courtois", Birthday = "1992-05-11", CareerGoals = 0, CareerAssists = 0, MarketValue = "€28M", Biography = "Real Madrid GK.", Position = "GK", Team = "Real Madrid" },
                    new PlayerDetails { PlayerId = "alisson-becker", Name = "Alisson Becker", Birthday = "1992-10-02", CareerGoals = 1, CareerAssists = 0, MarketValue = "€28M", Biography = "Liverpool GK.", Position = "GK", Team = "Liverpool" },
                    new PlayerDetails { PlayerId = "manuel-neuer", Name = "Manuel Neuer", Birthday = "1986-03-27", CareerGoals = 0, CareerAssists = 0, MarketValue = "€4M", Biography = "Bayern GK legend.", Position = "GK", Team = "Bayern Munich" },
                    new PlayerDetails { PlayerId = "mike-maignan", Name = "Mike Maignan", Birthday = "1995-07-03", CareerGoals = 0, CareerAssists = 0, MarketValue = "€38M", Biography = "AC Milan GK.", Position = "GK", Team = "AC Milan" },
                    new PlayerDetails { PlayerId = "virgil-van-dijk", Name = "Virgil van Dijk", Birthday = "1991-07-08", CareerGoals = 15, CareerAssists = 5, MarketValue = "€30M", Biography = "Liverpool captain.", Position = "DEF", Team = "Liverpool" },
                    new PlayerDetails { PlayerId = "antonio-rudiger", Name = "Antonio Rüdiger", Birthday = "1993-03-03", CareerGoals = 5, CareerAssists = 2, MarketValue = "€25M", Biography = "Real Madrid rock.", Position = "DEF", Team = "Real Madrid" },
                    new PlayerDetails { PlayerId = "william-saliba", Name = "William Saliba", Birthday = "2001-03-24", CareerGoals = 2, CareerAssists = 1, MarketValue = "€80M", Biography = "Arsenal's best defender.", Position = "DEF", Team = "Arsenal" },
                    new PlayerDetails { PlayerId = "theo-hernandez", Name = "Theo Hernández", Birthday = "1997-10-06", CareerGoals = 10, CareerAssists = 15, MarketValue = "€45M", Biography = "AC Milan pacy LB.", Position = "DEF", Team = "AC Milan" },
                    new PlayerDetails { PlayerId = "kevin-de-bruyne", Name = "Kevin De Bruyne", Birthday = "1991-06-28", CareerGoals = 15, CareerAssists = 30, MarketValue = "€50M", Biography = "City's playmaker.", Position = "MID", Team = "Man City" },
                    new PlayerDetails { PlayerId = "jude-bellingham", Name = "Jude Bellingham", Birthday = "2003-06-29", CareerGoals = 10, CareerAssists = 10, MarketValue = "€180M", Biography = "Madrid's golden boy.", Position = "MID", Team = "Real Madrid" },
                    new PlayerDetails { PlayerId = "rodri", Name = "Rodri", Birthday = "1996-06-22", CareerGoals = 5, CareerAssists = 5, MarketValue = "€130M", Biography = "Ballon d'Or winner.", Position = "MID", Team = "Man City" },
                    new PlayerDetails { PlayerId = "jamal-musiala", Name = "Jamal Musiala", Birthday = "2003-02-26", CareerGoals = 8, CareerAssists = 12, MarketValue = "€120M", Biography = "Bayern jewel.", Position = "MID", Team = "Bayern Munich" },
                    new PlayerDetails { PlayerId = "joao-pedro", Name = "João Pedro", Birthday = "2001-09-26", CareerGoals = 15, CareerAssists = 5, MarketValue = "€50M", Biography = "Versatile Brazilian attacker.", Position = "ATK", Team = "Brighton" },
                    new PlayerDetails { PlayerId = "harry-kane", Name = "Harry Kane", Birthday = "1993-07-28", CareerGoals = 40, CareerAssists = 10, MarketValue = "€100M", Biography = "Bayern goalscorer.", Position = "ATK", Team = "Bayern Munich" },
                    new PlayerDetails { PlayerId = "lamine-yamal", Name = "Lamine Yamal", Birthday = "2007-07-13", CareerGoals = 5, CareerAssists = 10, MarketValue = "€150M", Biography = "Barca's prodigy.", Position = "ATK", Team = "Barcelona" },
                    new PlayerDetails { PlayerId = "bukayo-saka", Name = "Bukayo Saka", Birthday = "2001-09-05", CareerGoals = 5, CareerAssists = 8, MarketValue = "€140M", Biography = "Arsenal's star winger.", Position = "ATK", Team = "Arsenal" },
                    new PlayerDetails { PlayerId = "rafael-leao", Name = "Rafael Leão", Birthday = "1999-06-10", CareerGoals = 12, CareerAssists = 10, MarketValue = "€75M", Biography = "AC Milan's winger.", Position = "ATK", Team = "AC Milan" },
                    new PlayerDetails { PlayerId = "declan-rice", Name = "Declan Rice", Birthday = "1999-01-14", CareerGoals = 2, CareerAssists = 5, MarketValue = "€120M", Biography = "Arsenal's anchor.", Position = "MID", Team = "Arsenal" },
                    new PlayerDetails { PlayerId = "florian-wirtz", Name = "Florian Wirtz", Birthday = "2003-05-03", CareerGoals = 15, CareerAssists = 20, MarketValue = "€130M", Biography = "Leverkusen's gem.", Position = "MID", Team = "Leverkusen" },
                    new PlayerDetails { PlayerId = "martin-odegaard", Name = "Martin Ødegaard", Birthday = "1998-12-17", CareerGoals = 8, CareerAssists = 15, MarketValue = "€110M", Biography = "Arsenal captain.", Position = "MID", Team = "Arsenal" },
                    new PlayerDetails { PlayerId = "alexander-arnold", Name = "Trent Alexander-Arnold", Birthday = "1998-10-07", CareerGoals = 10, CareerAssists = 35, MarketValue = "€70M", Biography = "Liverpool's creative RB.", Position = "DEF", Team = "Liverpool" },
                    new PlayerDetails { PlayerId = "ruben-dias", Name = "Rúben Dias", Birthday = "1997-05-14", CareerGoals = 3, CareerAssists = 1, MarketValue = "€80M", Biography = "Man City's leader.", Position = "DEF", Team = "Man City" },
                    new PlayerDetails { PlayerId = "bastoni", Name = "Alessandro Bastoni", Birthday = "1999-04-13", CareerGoals = 2, CareerAssists = 5, MarketValue = "€70M", Biography = "Inter's defensive wall.", Position = "DEF", Team = "Inter Milan" },
                    new PlayerDetails { PlayerId = "gregor-kobel", Name = "Gregor Kobel", Birthday = "1997-12-06", CareerGoals = 0, CareerAssists = 1, MarketValue = "€40M", Biography = "Dortmund's wall.", Position = "GK", Team = "Dortmund" }
                );
            }

            if (!context.Leaderboard.Any())
            {
                context.Leaderboard.AddRange(
                    new LeaderboardEntry { Username = "UclFan", Points = 28 },
                    new LeaderboardEntry { Username = "Champ123", Points = 25 },
                    new LeaderboardEntry { Username = "GoalMaster", Points = 22 },
                    new LeaderboardEntry { Username = "UclKing", Points = 20 },
                    new LeaderboardEntry { Username = "FootballStar", Points = 18 },
                    new LeaderboardEntry { Username = "Striker99", Points = 15 }
                );
            }

            if (!context.FantasyTeams.Any())
            {
                context.FantasyTeams.AddRange(
                    new FantasyTeam { Username = "Dream Team", TotalPoints = 45, PlayerIds = "1,2,3,72,83,82" },
                    new FantasyTeam { Username = "All Stars", TotalPoints = 42, PlayerIds = "74,78,79,83,84,85" },
                    new FantasyTeam { Username = "Ucl Masters", TotalPoints = 38, PlayerIds = "77,81,80,93,92,90" }
                );
            }

            context.SaveChanges();
        }
    }
}
