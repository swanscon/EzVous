export default function voteColor(inviteCount, voteCount) {
    if(inviteCount <= voteCount) return "green";
    else if(voteCount === 0) return "red";
    else if(voteCount === (inviteCount - 1)) return "yellowgreen";
    else if(voteCount >= (inviteCount / 2)) return "#ffcc00";
    else if(voteCount < (inviteCount / 2)) return "#ff9900";
    else return "grey";
}