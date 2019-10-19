import * as React from 'react'
import {fetchMessages, Message} from '../client';
import {Segment, Image, Comment, Header} from 'semantic-ui-react';

interface MessageFeedProps {
  channelName: string;
}

interface MessageFeedState {
  messages: Message[];
}
