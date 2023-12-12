
file = open('day6.txt', 'r')
lines = file.readlines()
lines = [line.strip() for line in lines]



times = lines.pop(0)
times= times.split()[1:]
times = [int(s) for s in times]


Distance = lines.pop(0)
Distance = Distance.split()[1:]
Distance = [int(s) for s in Distance]

print(times)
print(Distance)


ans = 1
for r in range(0, len(times)):
    time = times[r]
    dist = Distance[r]
    wins = 0
    for i in range(0, time+1):
        
        timeleft = time - i
        speed = i
        distme = speed * timeleft
        if distme > dist:
            wins = wins + 1
    ans = ans * wins

print(ans)
