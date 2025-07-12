
function PlaseTrack() {
//IPCB_Track;
var Track;
var Board = PCBServer.GetCurrentPCBBoard;
    if (Board != Null)
    {
        //Create a Track object
        Track           = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
        Track.X1         = MMsToCoord(100);
        Track.Y1         = MMsToCoord(100);
        Track.X2         = MMsToCoord(70);
        Track.Y2         = MMsToCoord(70);
        Track.Width = MMsToCoord(0.2);
        Track.Layer  = eTopLayer;



        //Put this Track in the Board object
        Board.AddPCBObject(Track);
        Track = PCBServer.GetCurrentPCBTrack;

        //Board.Track.Move(10000,5000);

    }
}



function PlaceArc() {
//IPCB_Track;
var Arc;
var Board = PCBServer.GetCurrentPCBBoard;
    if (Board != Null)
    {
        //Create a Track object
        Arc           = PCBServer.PCBObjectFactory(eArcObject, eNoDimension, eCreate_Default);
        Arc.XCenter   = MMsToCoord(100);
        Arc.YCenter   = MMsToCoord(100);
        //Arc.Width     = MMsToCoord(0.2);
        Arc.Layer     = eTopLayer;
        Arc.StartAngle= 0;
        Arc.EndAngle= 360;
        //Put this Track in the Board object
        Board.AddPCBObject(Arc);
        Arc = PCBServer.GetCurrentPCBArc;

    }
}
